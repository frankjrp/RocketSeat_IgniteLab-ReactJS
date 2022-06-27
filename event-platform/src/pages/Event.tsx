import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    const view_width = window.matchMedia("(max-width: 768px)")

    if (view_width.matches) {
        useEffect(() => {
            {
                slug ? (
                    document.getElementById("sidebar")?.classList.add("hidden"),
                    document.getElementById("seta")?.classList.add("-rotate-90")
                ) : ""
            }

        });
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="md:flex flex-1">
                <div id="hide" className="md:flex flex-1">
                    {slug
                        ? <Video lessonSlug={slug} />
                        : <div className="flex-1" />
                    }
                </div>
                <Sidebar />
            </main>
        </div>
    )
}