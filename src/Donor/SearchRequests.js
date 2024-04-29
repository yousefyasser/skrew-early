import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import FilterListIcon from '@mui/icons-material/FilterList';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from '@mui/material/Menu';
import IconButton  from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import dummyData from "../dummyData.json";
import { ListItemButton } from '@mui/material';

export default function AlignItemsList() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [category, setCategory] = React.useState([]);
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Winter"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Spring"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        label="Summer"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        label="Fall"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = ['Summer', 'Winter', 'Spring', 'Autumn'];
const categories = ['Clothes', 'Toys', 'Books','Medication','Medical Supplies','School Supplies','Food','Blood Donations', 'Teaching Classes', 'Doctor Visits'];
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFilterChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleFilterIconClick = (event) => {
    if (anchorEl === event.currentTarget) {
      // If the current target is the same as the anchor element, close the menu
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  let filteredItems = dummyData.requests.filter(item =>
    item.Category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (category.length > 0) {
    filteredItems = filteredItems.filter(item =>
      category.includes(item.Category)
    );
  }
  return (
    <div>
    <Grid item xs={12} sm={6} sx ={{
          marginTop:'10px',
          marginBottom:'10px',
          marginLeft: '10px',
          display: 'flex', justifyContent: 'left', alignItems: 'center', flexDirection: 'row'
        }}>
    <TextField
        label= "Search"
        variant="outlined"
        value={searchTerm}
        autoWidth
        onChange={handleSearchChange}
        sx ={{
          marginTop:'10px',
          marginBottom:'10px',
          marginLeft: '10px',
          backgroundColor:'background.paper',
        }}
      />
      <FormControl sx={{ m: 1, width: 200, backgroundColor:'background.paper', marginTop:'10px',
          marginBottom:'10px',
          marginLeft: '10px', }}>
        <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={category}
          onChange={handleFilterChange}
          input={<OutlinedInput label="Category" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {categories.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={category.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>  
      <IconButton onClick={handleFilterIconClick} sx={{ marginTop: '20px', marginBottom: '20px' }}> {/* IconButton component */}
          <FilterListIcon
            sx={{
              color: "blue",
              fontSize: '2rem',
            }}
          />
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        MenuProps={MenuProps}
      >
      <MenuItem>
      <FormControlLabel
        label="Season"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </MenuItem>
        
      </Menu>
       </IconButton>
      </Grid>      
    <div className="list-container">
    <List sx={{ maxwidth: "20%", bgcolor: 'background.paper', display: 'flex', justifyContent: "space-between", flexWrap: 'wrap'  }}>
    {filteredItems.map((item, index) => (
        <ListItem key={index} className="list-item">
          {/* <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} alt="" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
        <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            fit:'crop',
            auto:'format',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          image={item.ImageSrc}
          alt="green iguana"
        />
          <ListItemText
          primary={item.Name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.Category}
              </Typography>
            </React.Fragment>
          }
        />
         <CardActions>
         <Button size="small" color="primary" variant='contained' sx={{ display: 'inline' }} className="learn-more-button">
        Learn More
        </Button>
      </CardActions>
          <Divider variant="inset" component="li" />
        </CardActionArea>
        </ListItem>

      ))}
    </List>
    </div>
    </div>
  );
}



// export default function MediaCard() {
//   return (
//     {filteredItems.map((item, index) => (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {item.Name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
        
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   )
// )
//     });
// }
