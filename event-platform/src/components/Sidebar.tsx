import { useEffect, useState } from "react";
import { LessonType, useGetLessonsByLessonTypeQuery, useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
    const allLessons = useGetLessonsQuery().data

    const [lessonsData, setLessonsData] = useState(allLessons)
    const [filter, setFilter] = useState("all")

    const filteredLessons = useGetLessonsByLessonTypeQuery({
        variables: {
            type: filter as LessonType
        }
    }).data

    useEffect(() => {
        filter === "all" ? setLessonsData(allLessons) : setLessonsData(filteredLessons)
    });

    const handleChange = (event: any) => {
        setFilter(event.target.value)
    }

    return (
        <aside id="sidebar" className="w-[21.75rem] bg-gray-700 p-6 border md:border-0 md:border-l border-gray-600 mx-auto mt-7 mb-11 md:m-0">
            <span className="font-bold text-2xl text-center md:text-left pb-4 mb-6 border-b border-gray-500 block">
                Cronograma de aulas

                <div className="font-normal text-sm mt-5 flex items-center gap-2 justify-center md:justify-start">
                    <div>Exibindo:</div>

                    <div>
                        <select className="w-[7rem] bg-gray-500 border border-solid border-gray-300 p-1 rounded transition ease-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={handleChange}>
                            <option selected value="all">Todos</option>
                            <option value="live">Ao vivo</option>
                            <option value="class">Aula prática</option>
                        </select>
                    </div>
                </div>
            </span>

            <div className="flex flex-col gap-8">
                {lessonsData?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}