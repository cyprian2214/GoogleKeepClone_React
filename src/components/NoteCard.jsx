import React from "react";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import GroupsIcon from "@mui/icons-material/Groups";
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function NoteCard({ note, onDelete, onEdit }) {
  return (
    <div className="note-card">
      {note.title && <h3>{note.title}</h3>}
      <p>{note.content}</p>
      <div className="card-actions">
        <ColorLensIcon className="icon hover" />
        <NotificationsNoneIcon className="icon hover" />
        <GroupsIcon className="icon hover" />
        <ImageIcon className="icon hover" />
        <ArchiveIcon className="icon hover" onClick={onDelete} />
        <MoreVertIcon className="icon hover" />
      </div>
    </div>
  );
}
