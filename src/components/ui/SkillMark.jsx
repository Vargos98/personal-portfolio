export default function SkillMark({ skill, className }) {
  const Icon = skill.Icon;

  if (Icon) {
    return (
      <Icon
        className={className}
        style={{ color: skill.color || 'currentColor' }}
        aria-hidden="true"
      />
    );
  }

  if (skill.src) {
    return <img src={skill.src} alt="" className={className} />;
  }

  return null;
}
