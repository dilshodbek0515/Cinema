import MuiPagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const CustomPagination = ({ data, page, handleChange }) => {
  return (
    <Stack className='flex items-center justify-center w-full'>
      <MuiPagination
        className='max-w-96 h-10 py-1 rounded-lg bg-slate-900 dark:bg-slate-300'
        count={data?.total_pages > 500 ? 500 : data?.total_pages || 1}
        variant='outlined'
        color='primary'
        page={page}
        onChange={handleChange}
        sx={{
          '& .MuiPagination-ul': {
            '& .MuiPaginationItem-root': {
              color: 'white',
              '@media (max-width: 400px)': {
                fontSize: '10px',
                padding: '2px',
                minWidth: '20px',
                height: '20px'
              }
            }
          }
        }}
      />
    </Stack>
  )
}

export default CustomPagination
