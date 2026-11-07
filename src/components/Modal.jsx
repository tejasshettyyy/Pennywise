import {X} from 'lucide-react'
export default function Modal({title,children,onClose}){return <div className="overlay" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><section className="modal" role="dialog" aria-modal="true"><header><h2>{title}</h2><button className="icon-btn" onClick={onClose}><X size={18}/></button></header>{children}</section></div>}
