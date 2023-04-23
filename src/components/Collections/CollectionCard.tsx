import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  CardActionArea,
  Typography,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PolylineIcon from "@mui/icons-material/Polyline";
import { DeleteDialog } from "./DeleteDialog";

type CollectionCardProps = {
  collection: any;
  getCollectionsCall: () => void;
};

export const CollectionCard = (props: CollectionCardProps) => {
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const { collection, getCollectionsCall } = props;

  return (
    <>
      <Card
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardActionArea component={Link} to={`/collections/${collection.name}`}>
          <CardContent>
            <Typography align="center" variant="h5">
              {collection.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          spacing={1}
          sx={{ p: 1 }}
        >
          <Button
            variant="body"
            component={Link}
            to={`/collections/${collection.name}/vector`}
            size={"small"}
            startIcon={<PolylineIcon />}
          >
            visualize
          </Button>
          <Button
            variant="body"
            size={"small"}
            onClick={() => setOpenDeleteDialog(true)}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Stack>
      </Card>
      <DeleteDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        collectionName={collection.name}
        getCollectionsCall={getCollectionsCall}
      />
    </>
  );
};
