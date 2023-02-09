import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { StateContext } from '../../context';

function Basket() {
    const { toggleDrawer, state, list } = React.useContext(StateContext)
    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>



    )
}

export default Basket