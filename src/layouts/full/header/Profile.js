import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LocalStorage } from 'src/services/storage/localstorage';
import { STORAGE_KEY_ACCESS_TOKEN, STORAGE_KEY_REFRESH_TOKEN } from 'src/constants/localstorage';
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem as DropdownItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material';

import { IconUser } from '@tabler/icons';
import ProfileImg from 'src/assets/images/profile/user-1.jpg';
import { AuthContext } from 'src/context/AuthContext';
import { createMembershipClaim } from 'src/services/query/user';

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [category, setCategory] = useState('General');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [amountError, setAmountError] = useState('');
  const { logoutUser, userData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleMembership = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleConfirm = () => {
    if (validateForm()) {
      createMembershipClaim({
        'category': category,
        'amount_paid': parseInt(amount),
        'date_of_registration': new Date(date).toISOString(),
      });
      setOpenDialog(false);
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value <= 0) {
      setAmountError('Please enter a valid positive number');
    } else {
      setAmountError('');
    }
    setAmount(value);
  };

  const validateForm = () => {
    let valid = true;
    if (isNaN(amount) || amount <= 0) {
      setAmountError('Please enter a valid positive number');
      valid = false;
    } else {
      setAmountError('');
    }
    return valid;
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === 'object' && {
            color: 'primary.main',
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={userData?.profile_picture || ProfileImg}
          alt={userData?.profile_picture || ProfileImg}
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '200px',
          },
        }}
      >
        <MenuItem
          onClick={() => {
            navigate('/accounts-management');
          }}
        >
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>
        <Box mt={1} py={1} px={2}>
          <Button
            onClick={handleMembership}
            variant="outlined"
            color="primary"
            component={Link}
            fullWidth
          >
            Already a Member?
          </Button>
        </Box>
        <Box mt={1} px={2}>
          <Button
            onClick={handleLogout}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Logout
          </Button>
        </Box>
      </Menu>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Membership Information</DialogTitle>
        <DialogContent>
        <FormControl fullWidth margin="normal">
            <InputLabel shrink>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="General">General</MenuItem>
              <MenuItem value="Lifetime">Lifetime</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            label="Amount Paid"
            value={amount}
            onChange={handleAmountChange}
            error={!!amountError}
            helperText={amountError}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Date of Registration"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
