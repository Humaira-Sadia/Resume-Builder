import "../styles/ResumeTemplate.css";

export default function ResumeTemplate({
  
}) {
  return (
    <div class="page">
      <div class="header">
        <div id="about">
          <h1>Your Name</h1>
          <p id="profession">Senior Product Designer</p>
        </div>
        
      </div>
      <div class="content">
        <div class="main-column">
          <div id="experience-list">
            <h4 class="section-heading">
              <span class="yellow-bg">Experience</span>
            </h4>
            <div id="experience-1" class="exp-block">
              <h2>Senior UI/UX Product Designer</h2>
              <p class="institution-name">Enterprise Name</p>
              <p class="timeline">Aug 2018 - Present - 1 year, Paris</p>
              <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                adipisci pariatur quasi voluptate vel placeat modi. Eum numquam
                ex aut atque quod ipsa voluptate eaque? Alias rerum neque
                explicabo nam.
              </p>
            </div>
            <div id="experience-2" class="exp-block">
              <h2>Senior UI/UX Product Designer</h2>
              <p class="institution-name">Enterprise Name</p>
              <p class="timeline">Aug 2018 - Present - 1 year, Paris</p>
              <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                adipisci pariatur quasi voluptate vel placeat modi. Eum numquam
                ex aut atque quod ipsa voluptate eaque? Alias rerum neque
                explicabo nam.
              </p>
            </div>
          </div>
          <div id="education-list">
            <h4 class="section-heading">
              <span class="yellow-bg">Education</span>
            </h4>

            <div id="education-1" class="edu-block">
              <h2>Bachelor of Technology, CSE</h2>
              <p class="institution-name">Netaji Subhash Engineering College</p>
              <p class="timeline">2021 - Present</p>
              <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                adipisci pariatur quasi voluptate vel placeat modi.
              </p>
            </div>
            <div id="education-2" class="edu-block">
              <h2>High School Education</h2>
              <p class="institution-name">Netaji Subhash Engineering College</p>
              <p class="timeline">2021 - Present</p>
              <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                adipisci pariatur quasi voluptate vel placeat modi.
              </p>
            </div>
          </div>

          
        </div>
        <div id="sidebar">
        <div id="contact" class="contact-section">
          <p id="email">yourmail@gmail.com</p>
          <p id="phone-no">+91 1234567890</p>
          <p id="website">example.com</p>
        </div>
          <div id="tag-section-1" class="tag-block">
            <h1 id="tag-section-1-heading">
              <span class="yellow-bg">Skills</span>
            </h1>
            <div class="tags">
              <span class="tag-item">Java</span>
              <span class="tag-item">Python</span>
              <span class="tag-item">Javascript</span>
              <span class="tag-item">C++</span>
              <span class="tag-item">React.js</span>
              <span class="tag-item">MongoDB</span>
              <span class="tag-item">Node.js</span>
              <span class="tag-item">Rust</span>
              <span class="tag-item">HTML3/CSS</span>
            </div>
          </div>
          <div id="tag-section-2" class="tag-block">
            <h1 id="tag-section-1-heading">
              <span class="yellow-bg">Skills</span>
            </h1>
            <div class="tags-list">
              <span class="tag-list-item">Java</span>
              <span class="tag-list-item">Python</span>
              <span class="tag-list-item">Javascript</span>
              <span class="tag-list-item">C++</span>
              <span class="tag-list-item">React.js</span>
              <span class="tag-list-item">MongoDB</span>
              <span class="tag-list-item">Node.js</span>
              <span class="tag-list-item">Rust</span>
              <span class="tag-list-item">HTML3/CSS</span>
            </div>
          </div>
          <div id="tag-section-3" class="tag-block"></div>
        </div>
      </div>
    </div>
  );
}
