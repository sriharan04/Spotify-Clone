export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:"BQCPJbiOS81zJyXIoX9DPI8TvL2VNRrdb2-HnVR4IDdZw-MNOrEcbEnvDeNGt0MsByswisHEINlca5A09yoRAAL8gtKSYSpkHM8XuaIeuvoKx9Gzvm_9rJf_NjcJZ81U_sWA1GUmrgCD71L9x2Cm0Nd6imOle3WFGHKryTD7JXqirn3K",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
