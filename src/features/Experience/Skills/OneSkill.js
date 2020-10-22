import React from 'react';
import { Text, Box, Meter } from 'grommet';

export const OneSkill = ({nameGird, percent, nameSkill}) => {
    return (
        <Box
            gridArea={nameGird}
            direction="row"
            // justify="center"
            align="center"
            gap="medium"
            margin="large"
        >
            <Meter
                values={[{
                    value: percent,
                    label: 'sixty',
                    color: percent > 50 ? 'status-ok' : 'status-warning'
                }]}
                background="status-unknown"
                type="circle"
                size="50px"
                thickness="8px"
            />
            <Text>{nameSkill}</Text>
        </Box>
    )

}
