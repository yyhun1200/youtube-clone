class Youtube {
  key = process.env.REACT_APP_API_KEY;
  requestGet = {
    method: "GET",
    redirect: "follow",
  };
  requestPost = {
    method: "POST",
    redirect: "follow",
  };
  getData() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=marvel&type=video&key=${this.key}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}
