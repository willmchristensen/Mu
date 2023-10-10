import './Music.css'
import MusicCard from '../MusicCard';
import PodcastCard from '../PodcastCard';
import FormNavBar from '../FormNavBar';
import ContentHeader from '../ContentHeader';
import AreaButton from '../Magazine/AreaButton';
import MusicDetails from '../MusicDetails';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getAllPosts } from '../../store/post';
import PageHeader from '../PageHeader';
const Music = () => {
    const posts = useSelector(state => state.post.posts);
    const allPosts = Object.values(posts);
    const allMusic = allPosts.filter(p => p?.musicUrl?.length > 0);
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(getAllPosts())
	},[])
    return ( 
        <div className="music-container">
			<PageHeader header={'Music'} subheader={'Electronic music reviews, mixes, podcasts and playlists.'} />
            <div className="music-cards-container">
                <div className="content-header-container">
                    <div className="content-header-wrapper">
                        <ContentHeader content={'Albums'} />
                    </div>
                </div>
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<MusicCard music={m} />
							)
						})
					}
				</div>
				<div className="button">
					<AreaButton area={'albums'} />
				</div>
			</div>
			<div className="music-cards-container">
				<div className="content-header-container">
					<div className="content-header-wrapper">
						<ContentHeader content={'Singles & EPs'} />
					</div>
				</div>
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<MusicCard music={m} />
							)
						})
					}
				</div>
			<div className="button">
					<AreaButton area={'singles & EPs'} />
			</div>
			</div>
			<div className="music-cards-container">
				<div className="content-header-container">
					<div className="content-header-wrapper">
						<ContentHeader content={'Podcasts'} />
					</div>
				</div>
				<div className="podcast-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<PodcastCard music={m} />
							)
						})
					}
				</div>
				<div className="button">
						<AreaButton area={'podcasts'} />
				</div>
			</div>
			{/*
			<div className="content-header-container">
				<div className="content-header-wrapper">
					<ContentHeader content={'Mixes'} />
				</div>
			</div>
			<div className="music-cards-container">
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<MusicCard music={m} />
							)
						})
					}
				</div>
				<div className="button">
					<AreaButton area={'mixes'} />
				</div>
			</div>
			<div className="content-header-container">
				<div className="content-header-wrapper">
					<ContentHeader content={'Playlists'} />
				</div>
			</div>
			<div className="music-cards-container">
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<MusicCard music={m} />
							)
						})
					}
				</div>
			<div className="button">
					<AreaButton area={'playlists'} />
			</div>
						</div>
			<div className="content-header-container">
				<div className="content-header-wrapper">
					<ContentHeader content={'RA Reccomends'} />
				</div>
			</div>
			<div className="music-cards-container">
				<div className="music-cards-wrapper">
					{
						allMusic.map(m => {
							return (
								<PodcastCard music={m} />
							)
						})
					}
				</div>
				<div className="button">
						<AreaButton area={'RA Reccomends'} />
				</div>
			</div> */}
        </div>
    )
}

export default Music;