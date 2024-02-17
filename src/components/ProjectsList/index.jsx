import { useState } from "react"
import Mark from "../Mark"
import { ListItem } from "./styles"

const ProjectsList = ({title, onClick, isclicked}) =>{
    return(
        <ListItem
            onClick={onClick}
            $isclicked = {isclicked}
            >
            {title}
            <Mark number="1"/>
        </ListItem>
    )
}

export default ProjectsList