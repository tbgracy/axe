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

  const tooltip = {
    syncing: "Synchronisation en cours ...",
    "not-synced": "Non synchronisé sur le cloud.",
    synced: "Synchronisé.",
  }[syncState];

  return <div title={tooltip}>{icon}</div>;
}
