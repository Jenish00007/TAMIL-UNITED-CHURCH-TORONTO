import React from 'react';
import HeroHeading from './components/HeroHeading';

const PrayerRequestData = {
  heroheading:"Welcome to our Prayer Request Page!",
  heropara:"Feel the strength of our community as others join in prayer for you.",
  heading:'Prayer Requests',
  para: "At [Your Organization/Community Name], we believe in the power of prayer and the strength that comes from a supportive community. If you have a prayer request, we invite you to share it with us. Our community is here to offer support, encouragement, and to join you in lifting your concerns to a higher power.",
  formheading:'Submit Your Prayer Request',
  formpara:"",
  youtubevideos:{},

}
{/* <h2>Our Mission</h2>
<p></p>
// </section> *
  <h2>Upcoming Events</h2>
    <p></p>
    <ul>/}
const aboutpage ={
  abouttopboxheading :'Tamil United Church Toronto',
  aboutpara:"Welcome to the Tamil United Church in Toronto, where we gather in faith, fellowship, and love. Our church is a diverse and inclusive community that seeks to spread the message of Christ's love to all.",
<h2>Our Ministries</h2>
    <p>Explore the various ministries at Tamil United Church that cater to different age groups and interests. From youth programs to community outreach, there's a place for everyone to get involved and make a difference.</p>
    <a href="#">Discover Our Ministries</a>
}
const PageData = {
  title: 'Your Heading',
  paragraph: 'Your paragraph goes here.',
  link: 'four-column.html',
};

const YourComponent = () => {
  return (
    <div>
      {PageData.map((data, index) => (
        <HeroHeading key={index} PageData={data} />
      ))}
    </div>
  );
};

