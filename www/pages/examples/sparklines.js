// @source sourceCode
import React from 'react'

//

import useChartConfig from 'hooks/useChartConfig'
import Box from 'components/Box'
import SyntaxHighlighter from 'components/SyntaxHighlighter'
import { Chart } from 'react-charts'

let sourceCode

export default () => {
  const { data, randomizeData } = useChartConfig({
    series: 10
  })

  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  )

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        position: 'bottom',
        type: 'time',
        show: false
      },
      { position: 'left', type: 'linear', show: false }
    ],
    []
  )

  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <Box width={500} height={100}>
        <Chart data={data} series={series} axes={axes} tooltip />
      </Box>
      <br />
      <SyntaxHighlighter code={sourceCode} />
    </>
  )
}
// @source sourceCode
