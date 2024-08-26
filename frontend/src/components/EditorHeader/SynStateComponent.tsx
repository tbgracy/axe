import { CloudSync, CloudOff, CloudDone } from "@mui/icons-material";

export type SyncState = "syncing" | "synced" | "not-synced";

export default function SyncStateComponent({
  syncState,
}: {
  syncState: SyncState;
}) {
  const icon = {
    syncing: <CloudSync />,
    "not-synced": <CloudOff />,
    synced: <CloudDone />,
  }[syncState];

  return <div>{icon}</div>;
}
