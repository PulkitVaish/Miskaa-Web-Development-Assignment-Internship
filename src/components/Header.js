import React, {useState, useEffect} from 'react'
const Header = ({refreshHandler}) => {
    const [theme, setTheme] = useState(false); // false->Light and true->Dark
    function changeTheme() {
        setTheme((prev) => !prev);
    }
    useEffect(() => {
        const header = document.querySelector('.header');
        const details = document.querySelectorAll('.details');
        const uls = document.querySelectorAll('ul');
        const btn = document.querySelectorAll('.btn');
        if (theme) {
            document.body.classList.add('light-theme');
            header.classList.add('light-theme');

            details.forEach((detail) => {
                detail.classList.add('light-theme');
            })

            uls.forEach((ul) => {
                ul.classList.add('light-theme');
            })
            btn.forEach((btn) => {
                btn.classList.add("light-theme");
            })
        } else {
            document.body.classList.remove('light-theme');
            header.classList.remove('light-theme');

            details.forEach((detail) => {
                detail.classList.remove('light-theme');
            })

            uls.forEach((ul) => {
                ul.classList.remove('light-theme');
            })
            btn.forEach((btn) => {
                btn.classList.remove("light-theme");
            })
        }
    }, [theme]);
    return (
        <>
            <header className="header">
                <div>
                    <h1>Assignment</h1>
                </div>
                <div>
                    <button className="btn btn-refresh"
                        onClick={refreshHandler}>Refresh</button>

                </div>
                <div>
                    <button className="btn"
                        onClick={changeTheme}>
                        {
                        !theme ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>
                    } </button>
                </div>
            </header>
        </>
    )
}

export default Header
