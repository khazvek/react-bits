import { Table, Box, Text } from '@chakra-ui/react';

const CodeCell = ({ content = '' }) => {
  return (
    <Box
      fontFamily='monospace'
      py={1} px={2}
      borderRadius='5px'
      width='fit-content'
      fontWeight={500}
      color='#e9e9e9'
      backgroundColor='#333333'
    >
      {content}
    </Box>
  )
}

const PropTable = ({ data }) => {
  return (
    <Box mt={12}>
      <h2 className="demo-title-extra">Props</h2>
      <Box overflowX="auto" mt={6}>
        <Table.Root variant="line" size="sm" className='props-table'>
          <Table.Header borderBottom='1px solid #555555'>
            <Table.Row backgroundColor='#170D27' borderRadius='20px'>
              <Table.ColumnHeader letterSpacing='-.5px' borderRight="1px solid #555555" textTransform={'capitalize'} fontSize={'l'} py={4} color="white">Property</Table.ColumnHeader>
              <Table.ColumnHeader letterSpacing='-.5px' borderRight="1px solid #555555" textTransform={'capitalize'} fontSize={'l'} py={4} color="white">Type</Table.ColumnHeader>
              <Table.ColumnHeader letterSpacing='-.5px' borderRight="1px solid #555555" textTransform={'capitalize'} fontSize={'l'} py={4} color="white">Default</Table.ColumnHeader>
              <Table.ColumnHeader letterSpacing='-.5px' textTransform={'capitalize'} fontSize={'l'} py={4} color="white">Description</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((prop, index) => (
              <Table.Row key={index} borderBottom={index === data.length - 1 ? 'none' : '1px solid #555555'}>
                <Table.Cell borderColor="#333333" py={4} color="white" width={0} pr={8} borderRight="1px solid #555555" bg={'#000000'}>
                  <CodeCell rightJustified content={prop.name} />
                </Table.Cell>
                <Table.Cell borderColor="#333333" py={4} color="white" whiteSpace='nowrap' width={'120px'} borderRight="1px solid #555555" bg={'#000000'}>
                  <Text fontFamily='monospace' fontWeight={500}>{prop.type}</Text>
                </Table.Cell>
                <Table.Cell borderColor="#333333" py={4} color="white" borderRight="1px solid #555555" whiteSpace='nowrap' bg={'#000000'}>
                  <CodeCell content={prop.default && prop.default.length ? prop.default : '—'} />
                </Table.Cell>
                <Table.Cell borderColor="#333333" py={4} color="white" bg={'#000000'}>
                  <Text maxW={300}>{prop.description}</Text>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
};

export default PropTable;
