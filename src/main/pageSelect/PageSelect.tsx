import PageSelectButton from "../../models/PageSelectButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function PageSelect() {

    const [pageIndex, setPageIndex] = useState(-1)
    const[page, setPage] = useState("")

    useEffect(() => {
        let url = window.location.href
        let split = url.split("/")
        setPage(split[split.length-1])
    }, [pageIndex])

    const changePage = (index: number) => {
        setPageIndex(index)
    }

    const isSelected = (button: PageSelectButton, page: string): Boolean => {
        let strippedLink: string = button.link.substring(1)
        return strippedLink == page
    }

    let buttons: PageSelectButton[] = [
        new PageSelectButton("/", "About Me"),
        new PageSelectButton("/projects", "Projects"),
        new PageSelectButton("/contact", "Contact")
    ]

    return (
        <div className="w-full flex gap-3 px-20 mt-3">
            {buttons.map((button, index) => {
                return  <div key={index} className="flex gap-3">
                            {index != 0 ? <div className="w-[1px] h-full bg-neutral-600"></div> : <></>}
                            <Link 
                                to={button.link} 
                                className={`${isSelected(button, page) ? "text-green-400 hover:text-green-500" : "text-neutral-300 hover:text-neutral-400"}`}
                                onClick={() => changePage(index)}
                            >
                                <h4>{button.text}</h4>
                            </Link>
                            {index === buttons.length ? <div className="w-[1px] h-full bg-red-400"></div> : <></>}
                        </div>
            })}
        </div>
    );
}

export default PageSelect;