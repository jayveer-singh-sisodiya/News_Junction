// src/components/About.js
import React from 'react';

const About = () => {
  return (
   <div>
     <div className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>Welcome to the News Application, your go-to source for the latest news across various categories. Our mission is to provide up-to-date and accurate information to keep you informed about the world around you.</p>
        <p>Developed with the latest web technologies, our platform offers a user-friendly experience to access and explore news articles effortlessly.</p>
      </div>
    </div>
    <div className="about">
      <h2>About News Junction</h2>
      <p>
        I developed a dynamic news application using React and JavaScript, creating a user-friendly and visually appealing experience. This application fetches and displays real-time news articles from various categories, including Business, Entertainment, Health, Science, Sports, and Technology, leveraging the News API.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Interactive Navigation:</strong> Navigate through different news categories effortlessly with React Router.</li>
        <li><strong>Dynamic Content:</strong> Display news articles with responsive design, ensuring a seamless experience on any device.</li>
        <li><strong>Dark-Themed UI:</strong> Implemented a modern, dark-themed interface with a stylish background image and cohesive styling.</li>
        <li><strong>Pagination:</strong> Manage large volumes of articles with built-in pagination for smooth navigation.</li>
        <li><strong>Custom Styling:</strong> Applied CSS for an engaging design, including card layouts, button styles, and animations.</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>React Router</li>
        <li>News API</li>
        <li>CSS</li>
       
        
      </ul>
    </div>
   </div>
  );
}

export default About;
