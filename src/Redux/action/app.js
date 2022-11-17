
// import { authAxios } from "../../Config/axios";
import axios from "axios";


export const getWpPages = () => async _dispatch => {
    return new Promise(async (resolve, reject) => {
        // await authAxios().get("/wp-json/wp/v2/pages") 
        await axios.get(
            // "https://staging.albilad.site/wp-json/wp/v2/pages"
            "https://wordpress-gatsby.azurewebsites.net/wp-json/wp/v2/pages"
            // 'https://dev-manish-react.pantheonsite.io/wp-json/wp/v2/pages'
        ).then(
            response => {
                resolve(response.data)
                console.log("dsajgjsahjdshajhsdajh", response.data, "dsajgjsahjdshajhsdajh")
                const resData = response.data || []
                const allSlugs = resData.map(item => {
                    return { slug: item.slug, title: item.title.rendered }
                })
                _dispatch({ type: "SAVE_WP_SLUGS", payload: allSlugs })
                _dispatch({ type: "SAVE_WP_PAGES", payload: resData })
            },
            error => {
                reject(error)
            }
        )
            .catch(
                error => {
                    console.log("Catch", error);
                }
            )
    })
}

//http://localhost/wp_gatsby/privacy-policy-2/
export const getSlugData = (slugname) => async _dispatch => {
    return new Promise(async (resolve, reject) => {
        // await authAxios().get(slugname)
        await axios.get(
             "https://dev-manish-react.pantheonsite.io/wp-json/wp/v2/pages"
            // "https://wordpress-gatsby.azurewebsites.net/wp-json/wp/v2/pages"
            // "https://staging.albilad.site/wp-json/wp/v2/pages"
        )
            .then(
                response => {
                    resolve(response)
                },
                error => {
                    reject(error)
                }
            )
            .catch(
                error => {
                    console.log("Catch", error);
                }
            )
    })
}