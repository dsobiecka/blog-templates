import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    width: '100%',
    zIndex: '999',
  },
});

const StyledLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#101010',
    height: '9px',
  },

  barColorPrimary: {
    backgroundColor: '#EFE960',
  },
})(LinearProgress);

const ProgressBar = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let computeProgress = () => {
      // The scrollTop gives length of window that has been scrolled
      const scrolled = document.documentElement.scrollTop;
      // scrollHeight gives total length of the window and
      // The clientHeight gives the length of viewport
      const scrollLength = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = `${(100 * scrolled) / scrollLength}`;

      setProgress(parseInt(progress));
    };
    window.addEventListener('scroll', computeProgress);

    // Removing event listener upon unmounting
    return () => window.removeEventListener('scroll', computeProgress);
  });

  return (
    <div className={classes.root}>
      <StyledLinearProgress variant="determinate" value={progress} className="progressBar" />
    </div>
  );
};

export default ProgressBar;
