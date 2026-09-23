import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {useNavigate,useParams} from "react-router-dom";
import boardClient from "../../board-commons";
function BoardDelete(){
    return (
        <div className="board-page">
            <div className="page-title">
                <h1>게시글 삭제</h1>
                <p> 게시글을 삭제하려면 작성할 때 입력한 비밀번호를 입력하세요. </p>
            </div>

            <div className="board-form">
                <div className="delete-message">
                    <strong>게시글을 삭제하시겠습니까?</strong>
                    <span> 삭제된 게시글은 복구할 수 없습니다. </span>
                </div>


                <div className="form-group">
                    <label htmlFor="pwd"> 비밀번호 </label>
                    <input type="password" id="pwd"placeholder="비밀번호를 입력하세요"/>
                </div>
                <div className="board-form-buttons">
                    <button type="button" className="form-cancel-btn" > 취소</button>
                    <button type="button" className="form-delete-btn"> 삭제하기</button>
                </div>
            </div>
        </div>
    )
}