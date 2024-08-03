export function Avatar() {
  return <img src="home.jpg" alt="Jethro Cheruiyot" className="avatar" />;
}

export function Intro() {
  return (
    <div>
      <h1>Jethro Cheruiyot</h1>
      <p>
        I’m a software developer with expertise in Angular, React, Next.js,
        Node.js, and Express. My skills extend to containerization with Docker
        and version control using Git and GitHub. I’m passionate about building
        scalable, high-performance applications and thrive in dynamic,
        collaborative environments
      </p>
    </div>
  );
}

export function SkillSet() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😀" color="blue" />
      <Skill skill="Angular" emoji="😀" color="orangered" />
      <Skill skill="Typescript" emoji="😀" color="yellow" />
      <Skill skill="Javascript" emoji="😀" color="orange" />
      <Skill skill="Html Css" emoji="😀" color="green" />
      <Skill skill="Git Github Docker" emoji="😀" color="red" />
    </div>
  );
}

export function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
