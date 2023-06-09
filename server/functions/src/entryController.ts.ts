import {Response} from "express";
import {db} from "./config/firebase";

type EntryType = {
  title: string,
  text: string,
  coverImageUrl: string,
  contentEnable: boolean,
  }

type Request = {
  body: EntryType,
  params: { entryId: string }
  }

const addEntry = async (req: Request, res: Response) => {
  const {title, text} = req.body;
  try {
    const entry = db.collection("entries").doc();
    const entryObject = {
      id: entry.id,
      timestamp: new Date,
      title,
      text,
      contentEnable: true,
    };

    // entry.set(entryObject);
    await entry.set(entryObject);

    res.status(200).send({
      status: "success",
      message: "entry added successfully",
      data: entryObject,
    });
  } catch (error:any) {
    res.status(500).json(error.message);
  }
};

const getAllEntries = async (req: Request, res: Response) => {
  try {
    const allEntries: EntryType[] = [];
    const querySnapshot = await db.collection("entries").get();
    querySnapshot.forEach((doc: any) => allEntries.push(doc.data()));
    return res.status(200).json(allEntries);
  } catch (error:any) {
    return res.status(500).json(error.message);
  }
};

const updateEntry = async (req: Request, res: Response) => {
  const {body: {text, title, contentEnable}, params: {entryId}} = req;

  try {
    const entry = db.collection("entries").doc(entryId);
    const currentData = (await entry.get()).data() || {};

    const entryObject = {
      id: entryId,
      timestamp: currentData.timestamp,
      revision: new Date,
      title: title || currentData.title,
      text: text || currentData.text,
      // add to change boolean values, orginal below.
      // contentEnable: contentEnable || currentData.contentEnable,
      contentEnable: contentEnable,
    };

    await entry.set(entryObject).catch((error) => {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    });

    return res.status(200).json({
      status: "success",
      message: "entry updated successfully",
      data: entryObject,
    });
  } catch (error:any) {
    return res.status(500).json(error.message);
  }
};

const deleteEntry = async (req: Request, res: Response) => {
  const {entryId} = req.params;

  try {
    const entry = db.collection("entries").doc(entryId);

    await entry.delete().catch((error) => {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    });

    return res.status(200).json({
      status: "success",
      message: "entry deleted successfully",
    });
  } catch (error:any) {
    return res.status(500).json(error.message);
  }
};

export {addEntry, getAllEntries, updateEntry, deleteEntry};
