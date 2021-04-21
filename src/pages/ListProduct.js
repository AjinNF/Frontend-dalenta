import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Context } from '../context/ProductReducer'
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function ListProduct() {
    useEffect(() => {
        getAllProduct()
    }, [])
    const { state, getAllProduct, deleteProduct } = useContext(Context)
    const deleteData = (data) => {
        deleteProduct(data)
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header judul="List Product" />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Code</TableCell>
                                <TableCell align="right">Product Name</TableCell>
                                <TableCell align="right">Variants</TableCell>
                                <TableCell align="right">Outlets</TableCell>
                                <TableCell align="right">Categories</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Cost</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {state.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.product}</TableCell>
                                    <TableCell align="right">{row.variant}</TableCell>
                                    <TableCell align="right">{row.outlet}</TableCell>
                                    <TableCell align="right">{row.category}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.cost}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" onClick={() =>
                                            deleteData(
                                                row.id
                                            )
                                        } >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </main>
        </div>
    )
}

export default ListProduct
