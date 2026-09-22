import {useState,useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import boardClient from "../../board-commons";
interface BoardItem {
    NO:number;
    SUBJECT:string;
    NAME:string;
    DBDAY:string;
    HIT:number;
}
interface BoardListData {
    list:BoardItem[];
    curpage:number;
    totalpage:number;
}

function BoardList(){
    const [curpage, setCurpage] = useState<number>(1);
    const {isLoading,isError,error,data}=useQuery<BoardListData>({
        queryKey:['board-list',curpage],
        queryFn: async() => await boardClient.get(`/board/list_node/${curpage}`)
    })
    console.log(data)
    if(isLoading){
        return (
            <h1>Loading...</h1>
        )
    }
    if(isError){
        return (
            <h1>Error 발생:{error?.message}</h1>
        )
    }

    return (
        <h1>게시판 목록</h1>
    )
}
export default BoardList