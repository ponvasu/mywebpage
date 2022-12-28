
const APIkey = "AIzaSyDVoGRcwWI5t9-5JSYVBWow0sM0YVYI7s4";
const ID = "UCIE_berCCWCb2p0QC6UAIdA";

const subCount  = document.getElementById('subcount');
const videocount = document.getElementById('videoCount');
const viewcount = document.getElementById('viewCount');

console.log();

let getValues = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ID}&key=${APIkey}`)
    .then(Response => {
        return Response.json()
    })
    .then(data => {
        console.log(data);
        subcount.innerHTML = data["items"][0].statistics.subscriberCount;
        videoCount.innerHTML=data["items"][0].statistics.videoCount;
        viewCount.innerHTML=data["items"][0].statistics.viewCount;
        })
  
}


getValues();

