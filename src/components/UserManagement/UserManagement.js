import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import {
  AddCircleOutline,
  Edit,
  Delete,
  Key,
  PersonAddAlt1,
  PersonOff,
} from "@mui/icons-material";
import { toast } from "sonner";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Viewer",
      status: "Inactive",
    },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    email: "",
    role: "",
    status: "Active",
  });
  const [dialogMode, setDialogMode] = useState("edit"); // 'edit', 'resetPassword', 'invite', 'deactivate'

  const handleOpenDialog = (
    user = { id: null, name: "", email: "", role: "", status: "Active" },
    mode = "edit"
  ) => {
    setCurrentUser(user);
    setDialogMode(mode);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentUser({
      id: null,
      name: "",
      email: "",
      role: "",
      status: "Active",
    });
  };

  const handleSaveUser = () => {
    if (currentUser.id) {
      setUsers(
        users.map((user) => (user.id === currentUser.id ? currentUser : user))
      );
      toast.success("User updated successfully");
    } else {
      setUsers([...users, { ...currentUser, id: users.length + 1 }]);
      toast.success("User added successfully");
    }
    handleCloseDialog();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    toast.success("User deleted successfully");
  };

  const handleResetPassword = () => {
    toast.success(`Password reset email sent to ${currentUser.email}`);
    handleCloseDialog();
  };

  const handleInviteUser = () => {
    toast.success(`Invitation sent to ${currentUser.email}`);
    handleCloseDialog();
  };

  const handleToggleUserStatus = (id) => {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          const newStatus = user.status === "Active" ? "Inactive" : "Active";
          toast.success(
            `User ${user.name} ${
              newStatus === "Active" ? "activated" : "deactivated"
            }`
          );
          return { ...user, status: newStatus };
        }
        return user;
      })
    );
  };

  return (
    <Box id="projects" sx={{ py: 4, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <h2>User Management</h2>
          <Button
            variant="contained"
            startIcon={<AddCircleOutline />}
            onClick={() => handleOpenDialog()}
          >
            Add New User
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(user, "edit")}>
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => handleOpenDialog(user, "resetPassword")}
                  >
                    <Key />
                  </IconButton>
                  <IconButton onClick={() => handleToggleUserStatus(user.id)}>
                    {user.status === "Active" ? (
                      <PersonOff />
                    ) : (
                      <PersonAddAlt1 />
                    )}
                  </IconButton>
                  <IconButton onClick={() => handleDeleteUser(user.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>
            {dialogMode === "edit" &&
              (currentUser.id ? "Edit User" : "Add New User")}
            {dialogMode === "resetPassword" && "Reset Password"}
            {dialogMode === "invite" && "Invite User"}
          </DialogTitle>
          <DialogContent>
            {dialogMode === "edit" && (
              <>
                <TextField
                  margin="dense"
                  label="Name"
                  fullWidth
                  value={currentUser.name}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, name: e.target.value })
                  }
                />
                <TextField
                  margin="dense"
                  label="Email"
                  type="email"
                  fullWidth
                  value={currentUser.email}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, email: e.target.value })
                  }
                />
                <FormControl fullWidth margin="dense">
                  <InputLabel>Role</InputLabel>
                  <Select
                    value={currentUser.role}
                    onChange={(e) =>
                      setCurrentUser({ ...currentUser, role: e.target.value })
                    }
                  >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Editor">Editor</MenuItem>
                    <MenuItem value="Viewer">Viewer</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
            {dialogMode === "resetPassword" && (
              <p>
                Are you sure you want to reset the password for{" "}
                {currentUser.email}?
              </p>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              onClick={
                dialogMode === "edit"
                  ? handleSaveUser
                  : dialogMode === "resetPassword"
                  ? handleResetPassword
                  : handleInviteUser
              }
            >
              {dialogMode === "edit" &&
                (currentUser.id ? "Save Changes" : "Add User")}
              {dialogMode === "resetPassword" && "Reset Password"}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default UserManagement;
