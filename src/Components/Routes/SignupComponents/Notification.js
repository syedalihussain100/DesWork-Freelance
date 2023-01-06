import React from 'react'
import {db} from '../../../firebase'
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";


const Notifcations = async (uid, noticeStatus, status, type) => {

    const data = {
        noticeStatus,
        status,
        type
    }

    const notificationRef = doc(db, "/Notification", uid);

    await setDoc(notificationRef, {
        Notices: arrayUnion(data)
    }, { merge: true });

}

export default Notifcations