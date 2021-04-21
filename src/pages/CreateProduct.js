import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Context } from '../context/ProductReducer'
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }, textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
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


function CreateProduct({ history }) {
    const dataSubmit = () => {
        addProduct(id, product, variant,
            outlet, category, price, cost,
            history.push('/'))
    }
    const classes = useStyles();
    const { addProduct } = useContext(Context)
    const [id, setId] = useState(Math.floor(Math.random() * Math.floor(100)))
    const [product, setProduct] = useState('')
    const [variant, setVariant] = useState('')
    const [outlet, setOutlet] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [cost, setCost] = useState('')
    return (
        <div className={classes.root}>
            <Header judul="Create Product" />
            <main className={classes.content}>
                <div className={classes.toolbar} />

                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-full-width"
                        label="ID"
                        value={id}
                        onChange={event => {
                            const { value } = event.target;
                            setId(value)
                        }}
                        style={{ margin: 8 }}
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Product Name"
                        style={{ margin: 8 }}
                        fullWidth
                        value={product}
                        onChange={event => {
                            const { value } = event.target;
                            setProduct(value)
                        }}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }
                        }
                    />
                    <TextField
                        id="standard-full-width"
                        label="Variant"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        value={variant}
                        onChange={event => {
                            const { value } = event.target;
                            setVariant(value)
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Outlet"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        value={outlet}
                        onChange={event => {
                            const { value } = event.target;
                            setOutlet(value)
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Category"
                        style={{ margin: 8 }}
                        fullWidth
                        value={category}
                        onChange={event => {
                            const { value } = event.target;
                            setCategory(value)
                        }}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Price"
                        value={price}
                        onChange={event => {
                            const { value } = event.target;
                            setPrice(value)
                        }}
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Cost"
                        value={cost}
                        onChange={event => {
                            const { value } = event.target;
                            setCost(value)
                        }}
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button
                        onClick={dataSubmit}
                        variant="contained"
                        color="primary"
                        startIcon={<SaveIcon />}
                    >
                        CREATE
                    </Button>
                </form>
            </main>
        </div>
    )
}

export default CreateProduct
