import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
    const { data } = useGetLessonsQuery()

    return (
        <aside id="sidebar" className="w-[21.75rem] bg-gray-700 p-6 border md:border-0 md:border-l border-gray-600 mx-auto mt-7 mb-11 md:m-0">
            <span className="font-bold text-2xl text-center md:text-left pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
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