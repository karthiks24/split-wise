import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import TableExampleComplex from './table.jsx';
import TableGroup from './tablegroup.jsx';




const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};
function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
    <div>
    <h1 style={styles.headline}>TOTAL Balance: 2000</h1>
        <h1 style={styles.headline}>You Owe : 2000</h1>
    <Tabs>
        <Tab label="Linked accounts" >
            <div>
                <h2 style={styles.headline}>List your linked accounts</h2>
                <p>
                    <TableExampleComplex/>
                </p>

            </div>
        </Tab>
        <Tab label="Group" >
            <div>
                <h2 style={styles.headline}>Lists your linked groups</h2>
                <p>
                    cool
                </p>
            </div>

        </Tab>
        <Tab
            label="Activity"
            data-route="/home"
            onActive={handleActive}
        >
            <div>
                <h2 style={styles.headline}>Lists the activity you involved</h2>
                <p>
                    This is a third example tab.
                </p>
            </div>
        </Tab>
    </Tabs>
    </div>
);

export default TabsExampleSimple;

/*import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

export default class TabsExampleSimple extends Component {
    render() {
        return (
            <Tabs>
                <Tab label="Item One">
                    <div>
                        <h2 style={styles.headline}>Tab One</h2>
                        <p>
                            This is an example tab.
                        </p>
                        <p>
                            You can put any sort of HTML or react component in here. It even keeps the component state!
                        </p>

                    </div>
                </Tab>
                <Tab label="Item Two">
                    <div>
                        <h2 style={styles.headline}>Tab Two</h2>
                        <p>
                            This is another example tab.
                        </p>
                    </div>
                </Tab>
                <Tab
                    label="onActive"
                    data-route="/home"
                    onActive={handleActive}
                >
                    <div>
                        <h2 style={styles.headline}>Tab Three</h2>
                        <p>
                            This is a third example tab.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}*/

