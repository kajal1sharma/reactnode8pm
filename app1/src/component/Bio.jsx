import React from 'react'
import "../styles/bio.css"
const Bio = () => {
  return (
    <div className='bio_container'>
        <img style={{width:"40vw"}} src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" alt="imageofUSer"/>
        <div style={{width:"40vw"}}>
            <h1>My Bio</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
    </div>
  )
}

export default Bio
