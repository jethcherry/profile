const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
  // const numSkill = skill.length;
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

export function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
