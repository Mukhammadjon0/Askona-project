import { Slide, Snackbar } from '@mui/material';
import React, { useContext, } from 'react';
import { TbPhoneCall } from 'react-icons/tb';
import { StateContext } from '../../context';

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}
function Call() {
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
    const { userData, handleOpen } = useContext(StateContext)

    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="">
            {userData?.token ? (
                <div className="">
                    <button
                        onClick={handleClick(TransitionUp)}
                        className="group rounded flex items-center border border-gray-300 py-2 px-2 text-center hover:text-[#00b6c9] hover:border-[#00b6c9] active:scale-95"
                    >
                        <TbPhoneCall className="text-gray-400 pr-2 text-2xl group-hover:text-[#00b6c9]" />
                        Перезвоните мне
                    </button>
                    <Snackbar
                        autoHideDuration={2000}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={transition}
                        message={`Мы звоним на ваш номер ${userData?.mobile}`}
                        key={transition ? transition.name : ''}
                    />
                </div>) : (
                <button
                    onClick={handleOpen}
                    className="group rounded flex items-center border border-gray-300 py-2 px-2 text-center hover:text-[#00b6c9] hover:border-[#00b6c9] active:scale-95 sm:hidden"
                >
                    <TbPhoneCall className="text-gray-400 pr-2 text-2xl group-hover:text-[#00b6c9]" />
                    Перезвоните мне
                </button>
            )}
        </div>
    );
}

export default Call;
