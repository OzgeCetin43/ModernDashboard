import {
  BsFileEarmarkZipFill,
  BsFileEarmarkPdfFill,
  BsFiletypeMp4,
  BsFiletypeXls,
  BsFiletypePng,
} from "react-icons/bs";
import { FaRegFolderOpen } from "react-icons/fa6";

type Document = {
  id: number;
  icon: any;
  fileName: string;
  type: string;
  size: string;
  uploadDate: string;
};

export const documents: Document[] = [
  {
    id: 1,
    icon: BsFileEarmarkZipFill,
    fileName: "Artboard-documents.zip",
    type: "Zip File",
    size: "4.57 MB",
    uploadDate: "12 Dec 2022",
  },
  {
    id: 2,
    icon: BsFileEarmarkPdfFill,
    fileName: "Bank Management System",
    type: "PDF File",
    size: "8.89 MB",
    uploadDate: "24 Nov 2022",
  },
  {
    id: 3,
    icon: BsFiletypeMp4,
    fileName: "Tour-video.mp4",
    type: "MP4 File",
    size: "14.62 MB",
    uploadDate: "19 Nov 2022",
  },
  {
    id: 4,
    icon: BsFiletypeXls,
    fileName: "Account-statement.xsl",
    type: "XLS File",
    size: "2.38 KB",
    uploadDate: "14 Nov 2022",
  },
  {
    id: 5,
    icon: FaRegFolderOpen,
    fileName: "Project Screenshots Collection",
    type: "Folder File",
    size: "87.24 MB",
    uploadDate: "08 Nov 2022",
  },
  {
    id: 6,
    icon: BsFiletypePng,
    fileName: "Dashboard-logo.png",
    type: "PNG File",
    size: "879 KB",
    uploadDate: "02 Nov 2022",
  },
];
