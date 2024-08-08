import { Box, } from "@mui/material"
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
const NavSearchBar = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },'&:focus-within': {
    border: '2px solid black', 
   
  },
        marginLeft: 0,
        border:'#dadce0 0.5px solid',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '100%',
          },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
         maxHeight:'35px',
         fontSize:'0.75rem',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
    return(<Box > 
        <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#dadce0'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Tossed - St Martin's Lane"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </Box>)
}
export default NavSearchBar