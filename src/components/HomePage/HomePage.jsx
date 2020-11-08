import React, {useState} from 'react';
import './_HomePage.scss'

export default function HomePage(props) {

    const [url1, seturl1] = useState("https://www.udayy.com/");
    const [url2, seturl2] = useState("https://fr.wikipedia.org/wiki/Main_Page");

    function handleLogout() {
        window.localStorage.clear();
        if(window.localStorage.getItem("accessToken") === null){
            props.changeAuthentication(false);
        }
    }

    return (
        <div className="homepage-container">
            <div className="homepage-header">
                <div className="header-col1">
                    <span className="username">{window.localStorage.getItem("loggedUsername")}</span>
                    <input type="text" name="URL1" placeholder="Url1" value={url1} onChange={(e)=>seturl1(e.target.value)} className="url-field1"/>
                </div>
                <div className="header-col2">
                    <input type="text" name="URL2" placeholder="Url2" value={url2} onChange={(e)=>seturl2(e.target.value)} className="url-field2"/>
                    <img src="https://api.iconify.design/mdi-logout.svg" alt="Logout" onClick={handleLogout} className="logout"/>
                </div>
            </div>
            <div className="homepage-body">
                <div className="frame1">
                    <iframe src={url1} className="iframe1" title="Iframe Example"></iframe>
                </div>
                <div className="frame2">
                    <iframe src={url2} className="iframe2" title="Iframe Example"></iframe>
                </div>
            </div>
        </div>
    )
}
