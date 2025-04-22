import styles from './ResultsView.module.css'

const NoResultsView = () => {
    return (
        <div className={styles.noResults}>
            <h2>No Results Found</h2>
            <p>Sorry, we couldn't find any results matching your search.</p>
        </div>
    );
};

export default NoResultsView;
