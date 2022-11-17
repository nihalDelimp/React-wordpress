import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getWpPages } from '../../Redux/action/app'
import IsLoadingHOC from '../../Components/IsLoadingHOC/index';

function Header(props) {
    const { setLoading } = props
    const dispatch = useDispatch();
    const { wp_slugs } = useSelector(state => state.app)

    useEffect(() => {
        getallWppages()
    }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getallWppages = async () => {
        // setLoading(true)
        await dispatch(getWpPages())
            .then(
                response => {
                    setLoading(false);
                },
                (error) => {
                    console.log(error)
                    setLoading(false);
                }
            )
    }
    return (
        <div class="">
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                            {wp_slugs && wp_slugs.length > 0 &&
                                wp_slugs.map((item, i) =>
                                    <li key={i + 1} className="nav-item">
                                        <NavLink to={`/${item.slug}`} className="nav-link" aria-current="page">{item.title}</NavLink>
                                    </li>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default IsLoadingHOC(Header)
