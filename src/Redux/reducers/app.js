
let initialState = {
    wp_pages: [],
    wp_slugs: [],
    wp_titles: []
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case "SAVE_WP_SLUGS":
            return { ...state, wp_slugs: action.payload }
        case "SAVE_WP_TITLES":
            return { ...state, wp_titles: action.payload }
        case "SAVE_WP_PAGES":
            return { ...state, wp_pages: action.payload }
        default:
            return state
    }
}

