class Youtube {
  constructor() {
    this.key = process.env.REACT_APP_API_KEY;
  }
  requestGet = {
    method: "GET",
    redirect: "follow",
  };
  requestPost = {
    method: "POST",
    redirect: "follow",
  };
  getMostPopular(cb) {
    const data = fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.requestGet
    )
      .then((response) => response.json())
      .then((data) => data.items)
      .then((items) => cb(items));
    return data;
  }
  getSearch(cb, querry) {
    const data = fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${querry}&type=video&key=${this.key}`,
      this.requestGet
    )
      .then((response) => response.json())
      .then((data) => data.items)
      .then((items) => cb(items));
    return data;
  }
}
export default Youtube;
