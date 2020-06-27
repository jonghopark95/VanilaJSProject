export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("video_detail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("edit_video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("delete_video", { pageTitle: "Delete Video" });
