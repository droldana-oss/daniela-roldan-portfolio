export function ButtonLink({
  children,
  href,
  icon: Icon,
  variant = "primary",
  download,
  disabled = false,
}) {
  if (disabled) {
    return (
      <span className={`button ${variant} disabled`} aria-disabled="true">
        {Icon && <Icon size={17} />}
        {children}
      </span>
    );
  }

  const external = href?.startsWith("http");

  return (
    <a
      className={`button ${variant}`}
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {Icon && <Icon size={17} />}
      {children}
    </a>
  );
}

