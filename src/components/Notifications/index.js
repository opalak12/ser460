import React, { useState } from 'react';

function Notifications(){
    const [name, setUsername] = useState('');

    return(
        <div className="publish-container">
            <div className="form-section">
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <button type='notif-search'>Search</button>
            </div>
        </div>
    )
}

export default Notifications;