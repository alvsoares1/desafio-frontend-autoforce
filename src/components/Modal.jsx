import React, { useState, useEffect } from "react";
import "../themes/modal.css";

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

    useEffect(() => {
        if (isOpen) {
            setFormData({ name: "", phone: "", email: "" });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: "", phone: "", email: "" });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Entre em contato</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <button type="button" onClick={onClose} className="close-button">
                            Cancelar
                        </button>
                        <button type="submit" className="submit-button">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
