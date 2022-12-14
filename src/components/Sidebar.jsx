import React, { useState } from 'react'
import '../css/Sidebar.css'
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import boy from './boy.jpg'
import Item from './Item';
import {
    AccountCircleRounded,
    AssignmentTurnedInRounded,
    AttachMoneyRounded,
    BarChartRounded,
    ColorLensRounded,
    DashboardRounded,
    SettingsRemoteRounded,
    TocRounded,
} from '@mui/icons-material'
import { motion } from "framer-motion";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        setOpen(!open);
    };

    const sideContainerVariants = {
        true: {
            width: "15rem",
        },
        false: {
            transition: {
                delay: 0.6,
            },
        },
    };

    const sidebarVariants = {
        true: {},
        false: {
            width: "3rem",
            transition: {
                delay: 0.4,
            },
        },
    };


    const profileVariants = {
        true: {
            alignSelf: "center",
            width: "4rem",
        },
        false: {
            alignSelf: "flex-start",
            marginTop: "2rem",
            width: "3rem",
        }
    }

    return (
        <motion.div
            data-Open={open}
            variants={sideContainerVariants}
            initial={`${open}`}
            animate={`${open}`}
            className="Sidebar">

            <motion.div
                initial={`${open}`}
                animate={`${open}`}
                variants={sidebarVariants}
                className="bar">

                <motion.div
                    whileHover={{
                        scale: 1.2,
                        rotate: 180,
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        backdropFilter: "blur(3.5px)",
                        WebkitBackdropFilter: "blur(3.5px)",
                        border: "1px solid rgba( 255, 255, 255, 0.18 )",
                        transition: {
                            delay: 0.2,
                            duration: 0.4,
                        },
                    }}
                    onClick={handleToggle}
                    className="icon">
                    <TocRoundedIcon />
                </motion.div>


                <motion.div
                    layout
                    initial={`${open}`}
                    animate={`${open}`}
                    variants={profileVariants}
                    transition={{ duration: 0.4 }}
                    whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                        backdropFilter: "blur(5.5px)",
                        WebkitBackdropFilter: "blur(5.5px)",
                        border: "1px solid rgba( 255, 255, 255, 0.18 )",
                        cursor: "pointer",
                    }}
                    className="profile">
                    <img src={boy} alt="profile" />
                </motion.div>


                <div className="list">
                    <div className="group">
                        <motion.h3
                            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
                            ANALYTICS</motion.h3>
                        <Item icon={<DashboardRounded />}
                            name='Dashboard' />
                        <Item icon={<BarChartRounded />}
                            name="Performance" />
                    </div>
                    <div className="group">
                        <motion.h3
                            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
                            CONTENT</motion.h3>
                        <Item icon={<AttachMoneyRounded />} name="Sales" />
                        <Item icon={<AssignmentTurnedInRounded />} name="Checklist" />
                        <Item icon={<AccountCircleRounded />} name="Customers" />
                    </div>
                    <div className="group">
                        <motion.h3
                            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
                            CUSTOMIZATION</motion.h3>
                        <Item icon={<SettingsRemoteRounded />} name="Segments" />
                        <Item icon={<ColorLensRounded />} name="Themems" />
                    </div>

                </div>

            </motion.div>
        </motion.div>

    )
}

export default Sidebar