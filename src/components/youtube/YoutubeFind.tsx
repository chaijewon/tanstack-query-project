function YoutubeFind(){
    return (
        <div className="youtube-page">

            <div className="youtube-header">

                <div className="youtube-title">

                    <h1>
                        YouTube 동영상
                    </h1>

                    <p>
                        원하는 동영상을 검색해보세요.
                    </p>

                </div>

            </div>


            <div className="youtube-search">

                <div className="youtube-search-box">

            <span>
                🔍
            </span>


                    <input
                        type="text"
                        id="searchInput"
                        placeholder="검색어를 입력하세요"

                    />


                    <button>


                        검색

                    </button>

                </div>

            </div>


            <div className="youtube-result-header">

                <strong>
                    검색 결과
                </strong>

                <span id="resultCount">
            0개
        </span>

            </div>



            <div
                className="youtube-loading"
                id="loading">

                YouTube 동영상을 검색하고 있습니다...

            </div>


            <div
                className="youtube-list"
                id="youtubeList">

            </div>


            <div
                className="youtube-empty"
                id="empty">

                검색된 동영상이 없습니다.

            </div>


        </div>

    )
}
export default YoutubeFind