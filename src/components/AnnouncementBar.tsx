import { site } from "../content/site";

type Props = {
  className?: string;
};

export function AnnouncementBar({ className = "" }: Props) {
  return (
    <div className={`announcement announcement--in-masthead ${className}`.trim()} role="note">
      <p className="announcement__text">{site.announcement}</p>
    </div>
  );
}
